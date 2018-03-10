import React, {Component} from 'react';
// import ScrollView
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = {
		albums: []
	};

	componentWillMount(){
		axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((response) => {
			this.setState({
				albums: response.data
			});
		}).catch((err) => {
			console.log(err);
		});
	}

	renderAlbums() {
		// map it to the <AlbumDetail> element
		return this.state.albums.map((album) => 
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render(){
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;