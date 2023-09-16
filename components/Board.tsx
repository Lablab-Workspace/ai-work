"use client";

import { useBoardStore } from "@/store/BoardStore";
import React, { useEffect } from "react";
// import Image from "next/image";
// import { MinusSmallIcon, ViewColumnsIcon } from "@heroicons/react/20/solid";

import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

function Board() {
  const [board, getBoard, setBoardState, updateTodoInDB] = useBoardStore(
    (state) => [
      state.board,
      state.getBoard,
      state.setBoardState,
      state.updateTodoInDB,
    ]
  );

  useEffect(() => {
    getBoard(); 
  }, [getBoard]);
  // console.log(board);

  const handleOnDragEnd = (result: DropResult) => {
    // const board = result.board
    const { destination, source, type } = result;
    // console.log(destination, source, type);

    // check if user dragged card outside of board
    if (!destination) return;

    // handle column drag
    if (type === "column") {
      const entries = Array.from(board.columns.entries());

      const [removed] = entries.splice(source.index, 1);

      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);

      setBoardState({ ...board, columns: rearrangedColumns });
      return;
    }

    // handle nested columns necessary to do this as indexes are stored as (i.e 0,1,2,3... etc)
    // need to convert it to the id's with Drag and Drop library

    const columns = Array.from(board.columns);
    const startColIndex = columns[Number(source.droppableId)];
    // const finishColIndex = columns[Number(destination.droppableId)];
    const endColIndex = columns[Number(destination.droppableId)];


    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };
    // const finishCol: Column = {
    //   id: finishColIndex[0],
    //   todos: finishColIndex[1].todos,
    // };

    const endCol: Column = {
      id: endColIndex[0],
      todos: endColIndex[1].todos,
    };

    // console.log(startCol, finishCol)
    // if (!startCol || finishCol) return;
    if(!startCol || !endCol) return;


    // if (source.index === destination.index && startCol === finishCol) return;
    if(source.index === destination.index && startCol === endCol) return;



  // make a new copy
    const newTodos = startCol.todos;
    const [todoMoved] = newTodos.splice(source.index, 1);

    // if (startCol.id === finishCol.id) {
      if(startCol.id === endCol.id) {

      // same column task drag
      newTodos.splice(destination.index, 0, todoMoved);

      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, newCol);

      setBoardState({ ...board, columns: newColumns });
    } else {
      //  moved or dragging to another column
      // const finishTodos = Array.from(finishCol.todos);
      const movedTodos = Array.from(endCol.todos);

      movedTodos.splice(destination.index, 0, todoMoved);

      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
      const newColumns = new Map(board.columns);

      newColumns.set(startCol.id, newCol);
      // newColumns.set(finishTodos.id, {
      //   id: finishCol.id,
      //   todos: finishTodos,
      // });
      newColumns.set(endCol.id, {
        id: endCol.id,
        todos: movedTodos,
      });

      // update db
      // updateTodoInDB(todoMoved, finishCol.id);
      updateTodoInDB(todoMoved, endCol.id);

      setBoardState({ ...board, columns: newColumns });
    }
  };

  return (
    <>
      <DragDropContext
        // onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
        onDragEnd={handleOnDragEnd}
      >
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Array.from(board.columns.entries()).map(
                ([id, column], index) => (
                  <Column key={id} id={id} todos={column.todos} index={index} />
                )
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default Board;
