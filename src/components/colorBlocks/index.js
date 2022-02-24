import { Row, Col, Card } from 'antd';

const colorBlockStyle = {
  redCard: {
    height:18, 
    backgroundColor:'#ff3333'
  },
  yellowCard: {
    height:18, 
    backgroundColor:'#f7e032'
  },
  greenCard: {
    height:18, 
    backgroundColor:'#1ae11a'
  },
  scoreComment: {
    textAlign: 'center',
    paddingTop:50, fontSize:22
  }
}


function ColorBlocks({passwordScore, passwordLength}) {
  
  console.log(passwordScore,'psw data color vlock')
  return (
    <div>

                
              <Row>
               <Col span={24} offset={2}>
                <Row align="middle" gutter={8} style={{paddingTop:20}}>
                  <Col span={4}>
                    {(passwordScore >= 0 && passwordLength > 0) ? <Card style={colorBlockStyle.redCard}></Card> : <Card style={{height:18}}></Card> }
                  </Col>
                  <Col span={4}>
                    {(passwordScore >= 1 && passwordLength > 0)? <Card style={colorBlockStyle.yellowCard}></Card> : <Card style={{height:18}}></Card> }
                  </Col>
                  <Col span={4}>
                    {(passwordScore >= 2 && passwordLength > 0) ? <Card style={colorBlockStyle.yellowCard}></Card> : <Card style={{height:18}}></Card> }
                  </Col>
                  <Col span={4}>
                    {(passwordScore >= 3 && passwordLength > 0) ? <Card style={colorBlockStyle.greenCard}></Card> : <Card style={{height:18}}></Card> }
                  </Col>
                  <Col span={4}>
                    {(passwordScore === 4 && passwordLength > 0) ? <Card style={colorBlockStyle.greenCard}></Card> : <Card style={{height:18}}></Card> }
                  </Col>
                </Row>
                </Col>
              </Row>
              <h2 style={colorBlockStyle.scoreComment}>
                  {(passwordScore === 0 && passwordLength > 0) ? ` Your password is too weak!`  : null}
                  {(passwordScore === 1 && passwordLength > 0) ? ` Hmmm... Try a bit harder...`  : null}
                  {(passwordScore === 2 && passwordLength > 0) ? `Keep it up!` : null}
                  {(passwordScore === 3 && passwordLength > 0) ? `Your password is good.` : null}
                  {(passwordScore === 4 && passwordLength > 0) ? `This password is well secured! Nice!`  : null}
                </h2>


    </div>
  );
}

export default ColorBlocks;
