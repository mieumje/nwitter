import React, {Component} from "react";
import styled from "sytyled-components";

class MapContent extends Component {
    componentDidMount() {
        script.async = true;
        script.src ="https://dapi.kakao.com/v2/maps/sdk.js?appkey=11047b6bcad713db337dfa15736194b8&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load( () => {
                let container = document.getElementById("Mymap");
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                    level:7
                };

                const map = new window.kakao.maps.Map(container, options);
            })
        }
    }

    render(){
        return <MapContent id="MyMap"></MapContent>;
    }
}

const MapContent = styled.div`
    width: 100%;
    height: 100%;
`;

export default MapContent;