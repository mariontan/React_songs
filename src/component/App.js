import React from 'react'
import SongList from './SongList';
import SongDetail from './SongDetail';
//import {selectSong} from '../actions';// curly braces needed since it is a name export

const App = () =>{
	return(
		<div className="ui container grid">
			<div className ="ui row">
				<div className="column eight wide">
					<SongList/>
				</div>
				<div className="column eight wide">
					<SongDetail/>
				</div>
			</div>
		</div>
	);
};

export default App;