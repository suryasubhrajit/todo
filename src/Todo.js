// Todo.js File 
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "./components/Header";
import { Plus, Trash, ArrowRight, Toggle2On, Toggle2Off, Pen } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo, editTodo } from "./todoSlice";
import Footer from "./components/Footer";


const Todo = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        if (text) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEditClick = (id) => {
        const newText = prompt("Edit the todo:");
        if (newText !== null && newText.trim() !== "") {
            dispatch(editTodo({ id: id, newText }));
        } else {
            alert("Please enter a valid todo text.");
        }
    };

    return (
        <>
            <div className="bg-dark overflow-x-hidden" style={{ minHeight: '100vh' }}>
                <Header />
                <div style={{minHeight:'74vh', padding:'0 2rem'}}>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 5, offset: 4 }}>
                            <InputGroup className="mb-3 d-flex align-items-center">
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
                    <Row>
                        <Col md={{ span: 5, offset: 4 }}>
                            <ListGroup style={{height:'60vh', overflowY: 'auto',}}>
                                {/* map over and print items */}
                                {todos.map((todo) => {
                                    return (
                                        <div key={todo.id} >
                                            <ListGroup.Item
                                                action
                                                style={{
                                                    display: "flex",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <div>
                                                    <button style={{ border: 0, outline: 0, boxShadow: 'none', background: 'none', padding: '0', marginRight: '10px' }} onClick={() => handleToggleComplete(todo.id)}>
                                                        {" "}
                                                        {todo.completed ? <><Toggle2On size={"22"} /></> : <><Toggle2Off size={"22"} /></>}{" "}
                                                    </button>
                                                    <span className={todo.completed ? "text-decoration-line-through" : ""}>{todo.text}</span>
                                                </div>

                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}>
                                                    <Button style={{
                                                        marginRight: "2px", fontSize: "15px", display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                        variant="light"
                                                        onClick={() => handleDeleteTodo(todo.id)}>
                                                        <Trash style={{ paddingRight: '2px' }} /> Delete
                                                    </Button>
                                                    <Button style={{
                                                        marginLeft: "2px", fontSize: "15px", display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                        variant="light"
                                                        onClick={() => handleEditClick(todo.id)}>
                                                        <Pen style={{ paddingRight: '2px' }} /> Edit
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
                    <Footer/>
                </div>
            </div>
        </>
    );
}


export default Todo; 
