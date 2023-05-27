import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Context } from "..";

const NavBar: FC = observer(() => {
    const { user } = useContext(Context);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Social Network</Navbar.Brand>
                    {user.isAuth ? (
                        <Nav className="ml-auto">
                            <Nav.Link href="/login" className="fs-5">
                                Выйти
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className="ml-auto">
                            <Nav.Link href="/login">Войти</Nav.Link>
                            <Nav.Link href="/registration">
                                Зарегистрироваться
                            </Nav.Link>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </>
    );
});

export default NavBar;
