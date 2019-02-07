const workercode = () => {

  let onmessage = (e) => {
    console.log('Message received from main script %s ', e.data);
    console.log('Posting message back to main script');
    postMessage('Received from main: ' + (e.data));
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));
const blob = new Blob([code], {type: "application/javascript"});
const MyWorker = URL.createObjectURL(blob);

export default MyWorker;