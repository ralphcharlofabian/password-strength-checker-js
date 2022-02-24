import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//actions
import { passwordStrengthCheckerActions as checkPasswordStrength } from '../../appRedux/actions/passwordStregthChecker';


import { Input, Row, Col, Card } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import "./index.css" 

import ColorBlocks from './../colorBlocks';


//Style
const pwStrCheckerSyle = {
  guessTimeString : {
    paddingTop:18,
    fontSize:18
  },
  warning: {
    paddingTop:10, 
    color:'gray'
  },
  suggestions: {
    paddingTop:5,
    color:'gray'
  }
}


function PasswordStrengthChecker() {
  const dispatch = useDispatch();

  let [isAlreadyTypedPw, isAlreadyTypedPwFn] = useState(false);
  let [password, passwordFn] = useState('');


  let [resValue, resValueFn] = useState({})

  const passwordStrengthData = useSelector(({ passwordStrengthCheckerReducer }) => passwordStrengthCheckerReducer.passwordStrengthData);


  const verifyPasswordStrength = async (passwordValue) => {

    // async await approach
    try {
      let response = await axios.post('https://o9etf82346.execute-api.us-east-1.amazonaws.com/staging/password/strength', {
        password: passwordValue
      })
      console.log('response',response.data);
      resValueFn(response.data)
      
    } catch (error) {
      console.log(error);
    }
    // promise approach
    // .then (({data}) => {console.log(data); return data})
    // .catch((error) => {console.log(error)});
  }

  const typedPasswordFn = (e) => {

    // if (isAlreadyTypedPw === false) {
    //   isAlreadyTypedPwFn(true);
    //   passwordFn(e.target.value)
    // } else if (isAlreadyTypedPw === true && e.target.value.length === 0) {
    //   console.log('erased all type')
    // }
    passwordFn(e.target.value)
  }


  useEffect(()=>{
    let data = { 'password' : password} 
    console.log(password,'pw useeffect')
    password.length > 0 ? dispatch(checkPasswordStrength.postPasswordStrength(data)) : null;
  },[password]);



  return (
    <div>
      <Row align="middle" style={{paddingTop:'15%'}}>
      <Col span={12} offset={6}>
        <Card>
         <Row align="middle">
           <Col span={12} offset={6}>
              <Row>
               <Col span={14} offset={5}>
                 <div className="textHeader">Is your password strong enough?</div>
               </Col>
              </Row>
              <Input.Password
                placeholder="input password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{width: 500}}
                onChange={typedPasswordFn} 
                />
              <ColorBlocks passwordScore={passwordStrengthData.score} passwordLength={password.length}/>
              <div style={{textAlign: 'center'}}>
                {(password.length > 0 && passwordStrengthData.guessTimeString)? <div style={pwStrCheckerSyle.guessTimeString}>{`It will take ${passwordStrengthData.guessTimeString} to guess your password.`}</div> : null}
                {(password.length > 0 && passwordStrengthData.warning) ? <div style={pwStrCheckerSyle.warning}>{passwordStrengthData.warning}</div> : null}
                {(password.length > 0 && passwordStrengthData.suggestions) ? <div style={pwStrCheckerSyle.suggestions}>{passwordStrengthData.suggestions.map((suggestion) => {
                  return suggestion})}</div> : null}
              </div>
           </Col>

         </Row>

         


        </Card>
      </Col>
    </Row>

    </div>
  );
}

export default PasswordStrengthChecker;
