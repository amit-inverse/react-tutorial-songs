import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

function App() {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;
