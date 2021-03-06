import React from 'react';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './SignIn.scss';

import {PrimaryButton} from '../shared/button/primary-button/PrimaryButton';
import {AltLoginCard} from '../shared/card/alt-login-card/AltLoginCard';

export const SignIn: React.FC = (props) => {
    return (
        <div className="sign-in d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="fw-bold">Account Login</h1>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control className="input" type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control className="input" type="password" placeholder="Password" />
                    </Form.Group>
                    <PrimaryButton width="100%">Submit</PrimaryButton>
                </Form>
                <div className="text-end my-3">
                    <Link className="text-decoration-none" to='/sign-up'>Sign up</Link>
                    { ' / ' }
                    <Link className="text-decoration-none" to=''>Forgot your password?</Link>
                </div>

                <div className="mb-3">OR</div>

                <AltLoginCard id={'1'} name={'Wallet'} type={'wallet'} />
                <AltLoginCard id={'2'} name={'Facebook'} type={'facebook'} />
                <AltLoginCard id={'3'} name={'Google'} type={'google'} />
            </div>
        </div>
    )
}
