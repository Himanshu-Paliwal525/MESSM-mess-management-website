import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Location = ({ location }) => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyAMaJio4LFz7G10nD6n0MXTDNT4Pg56UOU">
            <div className="flex justify-center my-4">
                <GoogleMap
                    mapContainerStyle={{
                        height: "400px",
                        width: "90%",
                        borderRadius: "10px",
                    }}
                    zoom={14}
                    center={location}
                >
                    <Marker position={location} />
                </GoogleMap>
            </div>
        </LoadScript>
    );
};

export default Location;
