const React = require('react')
const ReactDOM = require('react-dom')
const $ = require('jquery')


let CongressPeople = React.createClass({

   render: function(){
      console.log('wat?')
      return(
         <div className="row congress-people">
            <CongressListing userData={this.props.congData}/>

         </div>


      )
   }




})
// <div className="col-sm-4 col-md-4 prisoner-info">
//    <div className="thumbnail prisoner-card">
//       <div className="caption">
//          <h3>{congObj.first_name} {congObj.last_name}</h3>
//             <h4>  {congObj.title}--{congObj.party}-{congObj.state_name}</h4>
//                <ul className="congress-info">
//                   <li className="email">email: {congObj.oc_email}</li>
//                   <li className="website">website: {congObj.website}</li>
//                   <li className="facebook">facebook: {congObj.facebook_id}</li>
//                   <li className="twitter">twitter: {congObj.twitter_id}</li>
//                </ul>
//            <p>TermEnd {congObj.term_end}</p>
//       </div>
//    </div>
// </div>

let CongressListing = React.createClass({

   render: function(){
      console.log(this.props.userData)
      let congArray =  this.props.userData.map(function(congObjItem, i){


               return <AllOfEm congObj={congObjItem} key={i}/>

               })
      return (
         <div className="container">


               {congArray}


         </div>
      )

   }




})

let AllOfEm =  React.createClass({

   render: function(){

      return ( <div className="col-sm-4 col-md-4 prisoner-info">
                  <div className="thumbnail prisoner-card">
                     <div className="caption">
                        <h3>{this.props.congObj.first_name} {this.props.congObj.last_name}</h3>
                           <h4>  {this.props.congObj.title}--{this.props.congObj.party}-{this.props.congObj.state_name}</h4>
                              <ul className="congress-info">
                                 <li className="email">email: {this.props.congObj.oc_email}</li>
                                 <li className="website">website: {this.props.congObj.website}</li>
                                 <li className="facebook">facebook: {this.props.congObj.facebook_id}</li>
                                 <li className="twitter">twitter: {this.props.congObj.twitter_id}</li>
                              </ul>
                          <p>TermEnd {this.props.congObj.term_end}</p>
                     </div>
                  </div>
               </div>
            )
   }





})










$.getJSON('http://congress.api.sunlightfoundation.com/legislators?apikey=fcec78298e9943e1b4df5e0a3dea8603').then(function(serverData){
   console.log(serverData.results)
   ReactDOM.render(<CongressPeople congData={serverData.results}/>, document.querySelector('#app-container'))

})
