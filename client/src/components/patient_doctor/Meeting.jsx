import React, { useEffect, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { Box, Paper, Button, Grid, Container } from "@mui/material";
import { useSelector } from "react-redux";
import meetingAPI from "../../api/meeting";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import PatientMeetingDocuments from './PatientMeetingDocuments'
// Helper function for participant loop.
const chunk = (arr) => {
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, 3));
  return newArr;
};
const MeetingGrid = () => {
  const params = useParams();
  const appointmentId = params.appointment_id
  const [joined, setJoined] = useState(false);
  const profile = useSelector((state) => state.user);
  const [ documents, setDocuments ] = useState([])
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("token");
  const { join, leave, toggleMic, toggleWebcam, toggleScreenShare } =
    useMeeting();
  const { participants } = useMeeting();
  const getDocuments = async()=>{
    try {
      const response = await meetingAPI.getMeetingDocuments(appointmentId, token)
      if(response.status === 200 && response.data.is_success){
        setDocuments(response.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const joinMeeting = () => {
    setJoined(true);
    join();
  };
  useEffect(() => {
    if (joined) {
      getDocuments()
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Box>
      {joined ? (
        <Paper elevation={3} sx={{ p: 1 }}>
          <PatientMeetingDocuments documents={documents} profile={profile}/>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ color: "white", mr: 1, mb: 1 }}
              onClick={() => {
                leave();
                navigate(`/dashboard/${profile.user_type}/appointments`);
              }}
            >
              Leave
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ color: "white", mr: 1, mb: 1 }}
              onClick={toggleMic}
            >
              toggleMic
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ color: "white", mr: 1, mb: 1 }}
              onClick={toggleWebcam}
            >
              toggleWebcam
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ color: "white", mb: 1 }}
              onClick={toggleScreenShare}
            >
              toggleScreenShare
            </Button>
          </Grid>
        </Paper>
      ) : (
        <Box sx={{ mt: 5 }}>
          <Paper elevation={3}>
            <Button
              variant="contained"
              onClick={joinMeeting}
              color="primary"
              sx={{ color: "white" }}
            >
              Contained
            </Button>
          </Paper>
        </Box>
      )}
      <Box>
        {chunk([...participants.keys()]).map((k) => (
          <Paper elevation={3} sx={{ p: 1 }} key={k}>
            <Grid container spacing={2}>
              {k.map((l) => (
                <Grid item xs={12} md={4} key={l}>
                  <ParticipantView participantId={l} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

const ParticipantView = (props) => {
  const webcamRef = useRef(null);
  const micRef = useRef(null);
  const screenShareRef = useRef(null);

  const {
    displayName,
    webcamStream,
    micStream,
    screenShareStream,
    webcamOn,
    micOn,
    screenShareOn,
  } = useParticipant(props.participantId);

  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);
        webcamRef.current.srcObject = mediaStream;
        webcamRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        webcamRef.current.srcObject = null;
      }
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  useEffect(() => {
    if (screenShareRef.current) {
      if (screenShareOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(screenShareStream.track);

        screenShareRef.current.srcObject = mediaStream;
        screenShareRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        screenShareRef.current.srcObject = null;
      }
    }
  }, [screenShareStream, screenShareOn]);

  return (
    <div key={props.participantId}>
      <audio ref={micRef} autoPlay />
      {webcamRef || micOn ? (
        <div>
          <h2>{displayName}</h2>
          <video height={"100%"} width={"100%"} ref={webcamRef} autoPlay />
        </div>
      ) : null}
      {screenShareOn ? (
        <div>
          <h2>Screen Shared</h2>
          <video height={"100%"} width={"100%"} ref={screenShareRef} autoPlay />
        </div>
      ) : null}
      <br />
      <span>
        Mic:{micOn ? "Yes" : "No"}, Camera: {webcamOn ? "Yes" : "No"}, Screen
        Share: {screenShareOn ? "Yes" : "No"}
      </span>
    </div>
  );
};

const Meeting = () => {
  const params = useParams();
  const token = params.token;
  const meetingId = params.meeting_id;
  return (
    <Container maxWidth="xl">
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: false,
          name: params.name,
        }}
        token={token}
      >
        <MeetingConsumer>
          {() => <MeetingGrid meetingId={meetingId} />}
        </MeetingConsumer>
      </MeetingProvider>
    </Container>
  );
};

export default Meeting;
