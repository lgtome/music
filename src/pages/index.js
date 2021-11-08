import {Music} from '../layouts'
import {LeftSidebar} from '../components/menu/LeftSidebar'
import {RightSidebar} from '../components/menu/RightSidebar'
import {SearchTrackBar} from '../components/menu/SearchTrackBar'
import {Modal} from '../components/modal/Modal'
import {SearchTrackByArtist} from '../components/modal/SearchTrackByArtist'
import React from 'react'


export default function Home() {

    return (
        <>
            {/*<LeftSidebar/>*/}
            {/*<RightSidebar/>*/}
            <SearchTrackBar/>
            <Music/>
            <Modal>
                <SearchTrackByArtist/>
            </Modal>
        </>
    )
}
