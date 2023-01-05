import React from 'react';
import './style_base.css';
import {Header, Section, LoginForm, MainScreen, Presentation} from './styles';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';


export default function App(){
    
    return(
       
        <MainScreen>
            
            <Section>
                <Presentation>
                    <h1>App Presentation</h1>    
                </Presentation>
                <LoginForm>
                    <div>
                        <h1>Entre nessa viagem</h1>
                        <p>Não tem uma conta ainda? 
                            <a href=""><b> Cadastre-se</b></a>
                        </p>
                    </div>
                    <form>
                        <div class="inputBox"><input type="text"/></div>
                        <div class="inputBox"><input type="password"/></div>
                        <input type="submit" value="Continuar"/>
                    </form>
                    <div class="btnBox">
                        <a href="" class="btn"><FaGoogle />Continuar com Google</a>
                        <a href="" class="btn"><FaFacebook /></a>
                        <a href="" class="btn"><FaApple /></a>
                    </div>
                </LoginForm>
            </Section>
        </MainScreen>
        
    );
}