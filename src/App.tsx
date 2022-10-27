import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button, Col, Container, Row } from "react-bootstrap";

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

            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
