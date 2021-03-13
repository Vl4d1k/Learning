import profileReducer, { addPostActionCreator } from "./profileReducer"
import { render, screen } from '@testing-library/react';
import React from "react"

it("new post added test", () => {
  let action = addPostActionCreator("new post name");
  let state = {
    posts: [
      { id: 1, name: "First Post" },
      { id: 2, name: "Second Post" },
    ]
  };
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
  }
);