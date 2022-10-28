import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
    const [editMode, setEdit] = useState<boolean>(false);
    const [user, setuser] = useState<string>("Your user");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateuser(event: ChangeEvent) {
        setuser(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="switch-edit-mode"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={() => setEdit(!editMode)}
                ></Form.Check>
                {editMode && (
                    <Form.Check
                        type="switch"
                        id="switch-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={() => setStudent(!isStudent)}
                    ></Form.Check>
                )}
            </div>
            <div>
                {editMode && (
                    <Form.Group controlId="formStudentuser">
                        <Form.Label>Enter user:</Form.Label>
                        <Form.Control
                            type="text"
                            value={user}
                            onChange={updateuser}
                        ></Form.Control>
                    </Form.Group>
                )}
            </div>
            <div>
                {user} {isStudent ? "is" : "is not"} {"a student"}
            </div>
        </div>
    );
}
