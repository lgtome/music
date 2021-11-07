import {Music} from '../layouts'
import {GenerateMusic} from '../components/GenerateMusic'
import {LeftSidebar} from '../components/menu/LeftSidebar'
import {RightSidebar} from '../components/menu/RightSidebar'
import {SearchTrackBar} from '../components/menu/SearchTrackBar'
import {Modal} from '../components/modal/Modal'


export default function Home() {

    return (
        <>
            {/*<LeftSidebar/>*/}
            {/*<RightSidebar/>*/}
            <SearchTrackBar/>
            <Music/>
            <Modal/>
        </>
    )
}
