import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const RecycleGuide = props => {
    return (
        <div>
            <p><b> Recycling Waste Points Conversion Rate </b> | <Link to='/#'> Guide on recycling waste</Link></p>
            <div class="ritem bg-white p-1 my-1">
                <div> 
                    
                    <img class="round-img" src={ require('../../img/box-brown.png')} /> 
                    <img class="round-img" src={ require('../../img/paper-book.png')} /><br/>
                    <b> Paper, cardboxes, books: 1kg = 250 points  </b> <br/> 

                    <img class="round-img" src={ require('../../img/plastic-bottle-color.png')} /> 
                    <img class="round-img" src={ require('../../img/detergent801.png')} /><br/>
                    <b> Plastic bag, plastic bottles: 1kg = 130 points  </b>
                    
                </div>
                

                <div>
                    <img class="round-img" src={ require('../../img/tin-grad.png')}/>
                    <img class="round-img" src={ require('../../img/drinkcan.png')}/><br/>
                    <b>  Metal cans, aluminium cans: 1 kg = 1000 points </b> <br/> 

                    <img class="round-img" src={ require('../../img/food-waste.png')}/>
                    <img class="round-img" src={ require('../../img/styro-tr.png')}/><br/>
                    <b>  Food waste, styrofoam, toilet paper and others = 0 points </b> 
                    
                </div>

            </div>


        </div>
        
    )
}

RecycleGuide.propTypes = {

}

export default RecycleGuide