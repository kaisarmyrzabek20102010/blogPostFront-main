import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Кастомная иконка маркера
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
const tours = [
  {
    name: "Пик Талгар",
    price: "$89",
    coords: [43.248949, 77.089709],
    image:
      "https://gorny-club.kz/wp-content/uploads/2020/04/0_1_DSC01125-Talgar-min.jpg",
  },
  {
    name: "Көлсай",
    price: "$149",
    coords: [43.050219, 78.314259],
    image:
      "https://qazaqgeography.kz/assets/media/kolsayskie-ozera-natsionalnyy-park/kolsay-vb.jpg",
  },
  {
    name: "Шарын Каньон",
    price: "$129",
    coords: [43.352279, 79.072894],
    image:
      "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190903133241/Sharyn-Canyon-Kazakhstan.jpg",
  },
  {
    name: "Бурабай",
    price: "$99",
    coords: [53.084797, 70.313939],
    image: "https://mysl.kazgazeta.kz/media/2021/02/05/burabay.jpg",
  },
  {
    name: "Озеро Каинды",
    price: "$139",
    coords: [43.1972, 78.4942],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Kaindy_lake_south-east_Kazakhstan.jpg",
  },
  {
    name: "Балхаш",
    price: "$119",
    coords: [46.848, 74.995],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrAelUK5mMjFjPROis1hQFgx8yHkcbzsB-A&s",
  },
  {
    name: "Алтын-Эмель",
    price: "$179",
    coords: [44.2167, 78.6667],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Altynemel_dune.jpg",
  },
  {
    name: "Медеу",
    price: "$59",
    coords: [43.1422, 77.0593],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Medeobanen1.jpg",
  },
  {
    name: "Байконур",
    price: "$199",
    coords: [45.9646, 63.3052],
    image:
      "https://www.advantour.com/img/kazakhstan/images/baikonur-cosmodrome.jpg",
  },
  {
    name: "Чарынский национальный парк",
    price: "$139",
    coords: [43.352279, 79.072894],
    image:
      "https://i.natgeofe.com/n/65b5d84b-c44e-41d0-8ee9-5295e1e6eba5/silkroad_shutterstock_1236828025_HR.jpg",
  },
  {
    name: "Катон-Карагай",
    price: "$189",
    coords: [49.1695, 85.6156],
    image:
      "https://br.katonkaragai.kz/images/phocagallery/thumbs/phoca_thumb_l_8.jpg",
  },
  {
    name: "Кок-Тобе",
    price: "$39",
    coords: [43.2373, 76.9774],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqewCY1UFiJctJbY5xD_HUmmVhr6lEsInGQ&s",
  },
  {
    name: "Аксарай",
    price: "$109",
    coords: [43.0198, 79.0154],
    image:
      "https://media.istockphoto.com/id/1213836989/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D1%8F-%D1%83%D1%87%D0%B8%D1%81%D0%B0%D1%80-%D0%B4%D0%B8%D1%82%D1%80%D0%B8%D1%85%D1%82-%D0%BD%D0%B5%D0%BD%D1%81%D0%B5%D1%85%D0%B8%D1%82-%D0%BA%D0%B0%D0%BF%D0%BF%D0%B0%D0%B4%D0%BE%D0%BA%D0%B8%D1%8F-%D1%82%D1%83%D1%80%D1%86%D0%B8%D1%8F-%D0%B7%D0%B0%D1%85%D0%B2%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-%D1%81%D0%BA%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA.jpg?s=612x612&w=0&k=20&c=4bc-RDzt_gTHLWs-NAwYQ4y3MRdGrl2mjGzmJTCDaMI=",
  },
  {
    name: "Актау",
    price: "$159",
    coords: [43.6481, 51.1722],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Aktau_Light_house_Caspian_Sea.jpg",
  },
  {
    name: "Бозжырa",
    price: "$249",
    coords: [44.1424, 54.3363],
    image:
      "https://static.tildacdn.pro/tild3032-3864-4437-b566-343933323639/___24.png",
  },
  {
    name: "Караганда",
    price: "$79",
    coords: [49.806, 73.085],
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/1/16/%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0%2C_%D0%94%D0%9A_%D0%93%D0%BE%D1%80%D0%BD%D1%8F%D0%BA%D0%BE%D0%B2_%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83.jpg/1200px-%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0%2C_%D0%94%D0%9A_%D0%93%D0%BE%D1%80%D0%BD%D1%8F%D0%BA%D0%BE%D0%B2_%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83.jpg",
  },
  {
    name: "Атырау",
    price: "$99",
    coords: [47.0945, 51.9236],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/%D0%A3%D1%80%D0%B0%D0%BB_%D1%80%D0%B5%D0%BA%D0%B0.jpg",
  },
  {
    name: "Қожа Ахмет Яссауи кесенесі",
    price: "$129",
    coords: [43.2973, 68.2706],
    image: "https://azretsultan.kz/eng/wp-content/uploads/2021/05/0002.jpg",
  },
  {
    name: "Алаколь",
    price: "$139",
    coords: [46.1606, 81.5205],
    image: "https://silkadv.com/sites/default/files/2020-07/alakol.jpg",
  },
  {
    name: "Жайляу Ким-Асар",
    price: "$89",
    coords: [43.1463, 77.0357],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/64/fc/f2/caption.jpg",
  },
  {
    name: "Семей",
    price: "$99",
    coords: [50.4114, 80.2275],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Semey_city.jpg",
  },
  {
    name: "Жаркент",
    price: "$109",
    coords: [44.1667, 80.0],
    image: "https://silkadv.com/sites/default/files/2022-08/zharkent.jpg",
  },
];

const MapComponent = () => {
  return (
    <section
      className="map-section"
      style={{ padding: "40px 0", textAlign: "center" }}
    >
      <h1>Танымал орындар</h1>
      <MapContainer
        center={[43.238949, 76.889709]} 
        zoom={7}
        style={{
          height: "500px",
          width: "90%",
          margin: "20px auto",
          borderRadius: "16px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {tours.map((tour, index) => (
          <Marker key={index} position={tour.coords} icon={customIcon}>
            <Popup>
              <div style={{ textAlign: "center" }}>
                <img
                  src={tour.image}
                  alt={tour.name}
                  style={{ width: "100px", borderRadius: "8px" }}
                />
                <h4>{tour.name}</h4>
                <p>{tour.price}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapComponent;
