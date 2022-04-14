import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customer';

const customers = 
[
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김정빈',
  'birthday' : '19970703',
  'gender' : '남자',
  'job' : '직장인'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '19980502',
  'gender' : '남자',
  'job' : '의적'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '다빈치',
  'birthday' : '19985413',
  'gender' : '여자',
  'job' : '디자이너'
}

]

class App extends Component {
  render() {
    return(
      <div>
        {
        customers.map(c => {
          return(
            <Customer 
            key = {c.id}
            id = {c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthday}
            gernder = {c.gender}
            job = {c.job}
            />
          );
        })
      }
      </div>
    ); 
  }
}

export default App;
