
import './App.css';
import Myusestate from '@/components/usestate.js'
import  Myusecontext from "@/components/usecontext";
import Myuseeffect from '@/components/useeffect'
import Myusecallback from '@/components/usecallback'
import Myusememo from '@/components/usememo'
import Myusereducer from '@/components/usereducer'
import Practise from '@/components/practise'
function App() {
  return (
    <div className="App">
      {/* <Myusestate></Myusestate>
      <Myusecontext></Myusecontext>
      <Myuseeffect></Myuseeffect>
      <Myusecallback></Myusecallback>
      <Myusememo></Myusememo>
      <Myusereducer></Myusereducer> */}
      <Practise></Practise>
    </div>
  );
}

export default App;
