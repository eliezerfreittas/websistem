import styled from 'styled-components';


export const MainScreen = styled.div`
    width: 100%;
`;

export const Section = styled.section`
    display: flex;  
`;

export const Presentation = styled.div`
    width: 70%;
    min-height: 750px;
    background-position: 50% 50%;
    background-size: 135%;
    background-image: url('https://4kwallpapers.com/images/wallpapers/mountains-rocks-night-starry-sky-scenery-illustration-macos-5120x2880-3810.jpg');
`;

export const LoginForm = styled(Presentation)`
    width: 29%;
    background-color: #1B065E;
    color: white;
    background-image: none;
    display: flex;
    flex-direction: column;
    padding: 20px;

    
    a {
        color: white;
        text-decoration: none;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 90%;
        padding: 10px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-top: 1px solid #747A82;
        border-bottom: 1px solid #747A82;
        margin: 10px 0;

        .inputBox {
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-bottom: 25px;
            padding: 10px 0;
            border: 1px solid #747A82;
            background-color: rgba(0,0,0,0.5);
            border-radius: 7px;

            input {
                width: 95%;
                font-size: 15pt;
                color: #747A82;
                border: none;
                outline: none;
                background-color: rgba(0,0,0,0.0);
                
            }
        }

        

        input[type=submit] {
            font-size: 15pt;
            padding: 10px 0; 
            background-color: #DA2944;
            border-radius: 7px;
            border: 1px solid #888;
            color: white;
            cursor: pointer;
        }
        
        input[type=submit]:hover {
            opacity: 0.8;
        }   

       
    }

    .btnBox {
        margin-top: 20px;
        width: 90%;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
    }

    a.btn {
        color: #101010;
        font-weight: bold;
        border: 1px solid white;
        border-radius: 7px;
        background-color: #f4f4f4;
        padding: 13px 22px;
        transition: 0.3s;

    }
    
    a.btn:hover {
        opacity: 0.8;
    }
`;