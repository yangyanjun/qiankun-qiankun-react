import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function render() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
if(!window.__POWERED_BY_QIANKUN__) { // 独立运行
  render(); 
}
export async function bootstrap(){

}
export async function mount(props){
  console.log(props)
  render(props);
}
export async function unmount(props){
  // const root = document.getElementById('root');
  // root && ReactDOM.unmountComponentAtNode(root)
  // const { container } = props;
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}