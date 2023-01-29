import { connect } from 'react-redux';

function SongDetail(props) {
    console.log(props);
    return <div>SongDetail</div>;
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
