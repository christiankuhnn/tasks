import { cp } from "fs";
import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Console } from "console";

function App(): JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "1px solid blue", padding: "4px" }}
        >
            <header className="App-header">
                Christian Kuhn UD CISC275 with React Hooks and TypeScript Hello
                World!
                <h1>
                    This is <span style={{ color: "blue" }}>colored </span>
                    header text
                </h1>
            </header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "100px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <ol>
                            <li>first thing</li>
                            <li>second thing</li>
                            <li>third thing</li>
                        </ol>
                    </Col>
                    <Col>
                        <img
                            src="https://ashbrooke.net/wp-content/uploads/2019/01/kangaroo-lake.jpg"
                            alt="Fishing"
                        />
                        <div
                            style={{
                                height: "100px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
