// Imports necessary components and functionalities
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";
import { Plus, Trash, ArrowRight, Toggle2On, Toggle2Off, Pen } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo, editTodo } from "./todoSlice";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Todo = () => {
    // State to manage the new todo text input
    const [text, setText] = useState("");

    // Accessing todos and dispatch function from Redux store using useSelector and useDispatch hooks
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // Handles changes in the new todo text input field
    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    // Dispatches the addTodo action to add a new todo with the current text
    const handleAddTodo = () => {
        if (text) {
            dispatch(addTodo(text));
            setText(""); // Clear the input field after adding a todo
        }
    };

    // Dispatches the toggleComplete action to toggle the completion state of a todo
    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    // Dispatches the deleteTodo action to delete a todo
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    // Opens a prompt to edit the text of a todo and dispatches the editTodo action
    const handleEditClick = (id) => {
        const newText = prompt("Edit the todo:");
        if (newText !== null && newText.trim() !== "") {
            dispatch(editTodo({ id: id, newText }));
        } else {
            alert("Please enter a valid todo text.");
        }
    };

    // Renders the Todo component
    return (
        <>
            <div className="bg-dark overflow-x-hidden" style={{ minHeight: '100vh' }}>
                <Header />{/* Renders the Header component */}
                <div style={{ minHeight: '74vh', padding: '0 2rem' }}>{/* Main content container */}
                    <Row style={{ marginTop: '50px' }}>{/* Row for adding a new todo */}
                        <Col md={{ span: 5, offset: 4 }}>{/* Column for the input field and button */}
                            <InputGroup className="mb-3 d-flex align-items-center">{/* Input group for adding a todo */}
                                <Plus size={"22"} style={{ color: "#ee4444", border: '1px solid #ee4444', borderRadius: '50%' }} />
                                <FormControl
                                    placeholder="Add task . . . "
                                    size="lg"
                                    className="bg-transparent text-light border-0 outline-0 bi4rj"
                                    style={{ boxShadow: 'none', fontSize: "16px", outline: '0' }}
                                    value={text} onChange={handleInputChange}
                                    aria-label="add something"
                                    aria-describedby="basic-addon2"
                                />
                                <style>
                                    {` 
                    .bi4rj::placeholder { 
                        color: #959595; 
                    }`
                                    }
                                </style>
                                <Button
                                    className="mt-2 d-flex justify-content-center align-items-center btn-sm rounded-2"
                                    onClick={handleAddTodo}
                                >
                                    Save <ArrowRight size={"22"} style={{ paddingLeft: '5px' }} />
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row>{/* Row for displaying the todo list */}
                        <Col md={{ span: 5, offset: 4 }}>{/* Column for the todo list */}
                            <ListGroup style={{ height: '60vh', overflowY: 'auto', }}>{/* List group for displaying todos */}
                                {/* map over and print items */}
                                {todos.map((todo) => {// Loops through each todo in the state
                                    return (
                                        <div key={todo.id} >{/* Key prop for efficient re-rendering */}
                                            <ListGroup.Item // Individual todo item
                                                action
                                                style={{
                                                    display: "flex",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <div>{/* Container for todo text and completion toggle */}
                                                    <button style={{ border: 0, outline: 0, boxShadow: 'none', background: 'none', padding: '0', marginRight: '10px' }} onClick={() => handleToggleComplete(todo.id)}>
                                                        {" "}
                                                        {todo.completed ? <><Toggle2On size={"22"} /></> : <><Toggle2Off size={"22"} /></>}{" "}{/* Conditional rendering of completion toggle icons */}
                                                    </button>
                                                    <span className={todo.completed ? "text-decoration-line-through" : ""}>{todo.text}</span>{/* Displays the todo text with line-through for completed todos */}
                                                </div>

                                                <div style={{// Container for delete and edit buttons
                                                    display: "flex",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}>
                                                    <Button style={{// Delete button styles
                                                        marginRight: "2px", fontSize: "15px", display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                        variant="light"
                                                        onClick={() => handleDeleteTodo(todo.id)}>
                                                        <Trash style={{ paddingRight: '2px' }} /> Delete{/* Delete button with icon */}
                                                    </Button>
                                                    <Button style={{// Edit button styles
                                                        marginLeft: "2px", fontSize: "15px", display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                        variant="light"
                                                        onClick={() => handleEditClick(todo.id)}>
                                                        <Pen style={{ paddingRight: '2px' }} /> Edit{/* Edit button with icon */}
                                                    </Button>
                                                </div>
                                            </ListGroup.Item>
                                        </div>
                                    );
                                })}
                            </ListGroup>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Footer />{/* Renders the Footer component */}
                </div>
            </div>
        </>
    );
}


export default Todo; 
