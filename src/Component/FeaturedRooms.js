// import React, { Component } from 'react'
// import {RoomContext} from "../context";
// import {FaRPoject} from "react-icon/fa";
// import Loading from "../Loading";
// import Room from "./Room";
// import Title from "./Title";

// export default class FeaturedRooms extends Component {
//     static contextType = RoomContext;
//     render() {
//         let { Loading, FeaturedRooms: rooms} =this.context;
//         rooms = rooms.map(room => {
//             return <Room key= {room.id} />
//         });
//         return (
//             <Section className="Featured-rooms">
//                 <Title title = "Featured-rooms" />
//                     <div className="featured-rooms-center">
//                         {loading ? <Loading /> : rooms}
//                         </div>
//                     <Loading />
//             </Section>
//         );            
//     }
// }
// rcc
import React, { Component } from "react";
import { RoomContext } from "../context";
import { FaRProject } from "react-icons/fa";
import Loading from "../Loading";
import Room from "./Room";
import Title from "./Title";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
        <Loading />
      </section>
    );
  }
}
