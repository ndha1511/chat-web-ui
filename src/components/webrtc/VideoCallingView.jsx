import Draggable from "react-draggable";
import { closeCall } from "../../services/MessageService";
import { useEffect, useState } from "react";
import { closeStream, localStream } from "../../configs/WebRTCConfig";
import { useDispatch, useSelector } from "react-redux";
import { setDragableAudioCall } from "../../redux/reducers/dragableReducer";
import { Icon } from "zmp-ui";
import Icons from "../icons/Icons";
import TimeAudioVideoCall from "./TimeAudioVideoCall";
import { Modal } from "react-bootstrap";

function VideoCallingView(props) {
    console.log(props.remoteStreams);

    const dispatch = useDispatch();
    const messageCall = useSelector((state) => state.message.messageCall);
    const userCurrent = useSelector((state) => state.userInfo.user);
    const windowSize = useSelector(state => state.render.windowSize);
    const chatInfo = useSelector(state => state.message.chatInfo);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [counter, setCounter] = useState(0);
    const [mute, setMute] = useState(false);
    const [showCamera, setShowCamera] = useState(true);
    useEffect(() => {
        const dialogWidth = 300; // Chiều rộng cố định của hộp thoại
        const windowWidth = windowSize.width;
        setPosition({
            x: (windowWidth - dialogWidth) / 2, // Căn giữa hộp thoại theo chiều ngang của cửa sổ
            y: windowSize.height / 2 - 100 // Giữ nguyên vị trí của chiều cao
        });
    }, [windowSize]);
    const stopCall = async () => {
        closeStream();
        await closeCall(messageCall.id);
        dispatch(setDragableAudioCall(false));
    }

    const toggleMute = () => {
        setMute(prevMute => !prevMute);
        if (localStream) {
            localStream.getAudioTracks().forEach(track => {
                track.enabled = !track.enabled; // Toggle the enabled state of the audio track
            });
        }
    }
    const toggleCamera = () => {
        setShowCamera(prevShowCamera => !prevShowCamera);
        if (localStream) {
            localStream.getVideoTracks().forEach(track => {
                track.enabled = !track.enabled; // Toggle the enabled state of the video track
            });
        }
    }
    return (
        windowSize.width > 768 ?
            <Draggable defaultPosition={position}>
                <div style={{
                    position: "fixed",
                    zIndex: 999,
                    cursor: "pointer"
                }}>
                    <div className="video-call" style={{
                        width: 1000,
                        height: 650,
                        backgroundColor: "#fff",
                        border: "1px solid rgb(210, 203, 203)",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: 10
                    }}>
                        <div className="header-video-call">
                            {/* <button><i className="bi bi-arrows-angle-contract"></i></button> */}
                            <div>
                                <img src="/assets/icons/iconCall.png" style={{ width: 28, height: 28, marginRight: 10, marginTop: -7 }} alt="" />
                                <span>Zalo Call - {props.callerInfo.name}</span>
                            </div>
                            <div onClick={() => dispatch(setDragableAudioCall(false))}>
                                <Icon icon="zi-close" />
                            </div>
                        </div>
                        <div className="center-video-call">
                            <div className="time-call-video">
                                <TimeAudioVideoCall />
                            </div>
                            <div className="remote-video">
                                {props.remoteStreams.map((stream, index) => {
                                    return <video key={index} ref={(ref) => {
                                        if (ref && stream) {
                                            ref.srcObject = stream;
                                        }
                                    }} autoPlay muted></video>
                                })}
                                <div className="name-video-call">

                                    <span>{props.callerInfo.name}</span>
                                </div>
                            </div>
                            <div className="local-video">
                                <div className="name-video-call-1">
                                    <span>{userCurrent.name}</span>
                                </div>
                                <video ref={(ref) => {
                                    if (ref && localStream) {
                                        ref.srcObject = localStream;
                                    }
                                }} autoPlay muted
                                ></video>
                            </div>
                        </div>
                        <div className="footer-audio-call">
                            <div className="group-btn-video-call">
                                <button className="btn-audio-call-footer">
                                    <div onClick={toggleCamera}>
                                        {/* <Icons type='video'  /> */}
                                        {showCamera ? <div style={{ marginTop: -8, marginLeft: 2 }}><Icons type='video' size={21} fillColor='white' /></div> :
                                            <div style={{ marginTop: -5 }}><Icons type='videoMute' size={25} fillColor='white' /></div>}
                                    </div>
                                    <Icon style={{ color: 'white' }} icon='zi-chevron-up' />
                                </button>
                                <button onClick={stopCall}
                                    className="btn-audio-call1 btn-reject">
                                    <i className="bi bi-telephone-fill"></i>
                                </button>
                                <button className="btn-audio-call-footer">
                                    <div onClick={toggleMute}>
                                        {!mute ? <i style={{ color: 'white', fontSize: 18 }} className="bi bi-mic"></i> : <i style={{ color: 'white', fontSize: 18 }} className="bi bi-mic-mute"></i>}
                                    </div>
                                    <Icon style={{ color: 'white' }} icon='zi-chevron-up' />
                                </button>

                            </div>
                            <div >
                                <button className="btn-setting" >
                                    <Icon style={{ marginRight: 10 }} icon='zi-more-grid' />
                                    <Icon style={{ color: 'white' }} icon='zi-setting' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
            :
            <Modal show={true} size="md" centered>
                <Modal.Header >
                    <Modal.Title>
                        <img src="/assets/icons/iconCall.png" style={{ width: 28, height: 28, marginRight: 10, marginTop: -7 }} alt="" />
                        <span style={{ fontSize: 14 }}>Zalo Call - {props.callerInfo.name}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: 0, height: 500 }}>
                    <div className="center-video-call">
                        <div className="time-call-video">
                           <div style={{width:100}}> <TimeAudioVideoCall /></div>
                        </div>
                        <div className="remote-video">
                            {props.remoteStreams.map((stream, index) => {
                                return <video key={index} ref={(ref) => {
                                    if (ref && stream) {
                                        ref.srcObject = stream;
                                    }
                                }} autoPlay muted></video>
                            })}
                            <div className="name-video-call" style={{marginBottom:20}}>

                                <span>{props.callerInfo.name}</span>
                            </div>
                        </div>
                        <div className="local-video">
                            <div className="name-video-call-1">
                                <span>{userCurrent.name}</span>
                            </div>
                            <video ref={(ref) => {
                                if (ref && localStream) {
                                    ref.srcObject = localStream;
                                }
                            }} autoPlay muted
                            ></video>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ padding: 0, margin: 0 }}>
                    <div className="footer-audio-call">
                        <div className="group-btn-video-call">
                            <button className="btn-audio-call-footer">
                                <div onClick={toggleCamera}>
                                    {/* <Icons type='video'  /> */}
                                    {showCamera ? <div style={{ marginTop: -8, marginLeft: 2 }}><Icons type='video' size={21} fillColor='white' /></div> :
                                        <div style={{ marginTop: -5 }}><Icons type='videoMute' size={25} fillColor='white' /></div>}
                                </div>
                                <Icon style={{ color: 'white' }} icon='zi-chevron-up' />
                            </button>
                            <button onClick={stopCall}
                                className="btn-audio-call1 btn-reject">
                                <i className="bi bi-telephone-fill"></i>
                            </button>
                            <button className="btn-audio-call-footer">
                                <div onClick={toggleMute}>
                                    {!mute ? <i style={{ color: 'white', fontSize: 18 }} className="bi bi-mic"></i> : <i style={{ color: 'white', fontSize: 18 }} className="bi bi-mic-mute"></i>}
                                </div>
                                <Icon style={{ color: 'white' }} icon='zi-chevron-up' />
                            </button>

                        </div>
                        <div >
                            <button className="btn-setting" >
                                <Icon style={{ marginRight: 10 }} icon='zi-more-grid' />
                                <Icon style={{ color: 'white' }} icon='zi-setting' />
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
    );
}

export default VideoCallingView;