// import React, { useEffect, useState } from "react";

// import { StatusBar, Dimensions } from "react-native";

// import { LinearGradient } from "expo-linear-gradient";

// import styled from "styled-components/native";

// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import Movies from "../components/Movies";

// import ProfileContext from "../context/ProfileContext";

// import { GetCountry, GetLocation } from "../utils/Geolocation";

// const Container = styled.ScrollView`
//   flex: 1;
//   background-color: #000;
// `;

// const Poster = styled.ImageBackground`
//   width: 100%;
//   height: ${(Dimensions.get("window").height * 81) / 100}px;
// `;

// const Gradient = styled(LinearGradient)`
//   height: 100%;
// `;

// const Home = (props) => {
//   const [movies, setMovies] = useState([]);
//   const [nationalMovies, setNationalMovies] = useState([]);
//   const [position, setPosition] = useState(null);

//   useEffect(() => {
//     GetLocation()
//       .then((info) => {
//         setPosition(info);
//       })
//       .catch((error) => {
//         setPosition(null);
//       });
//   }, []);

//   useEffect(() => {
//     const getNationalMovies = async () => {
//       if (position) {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;
//         const country = await GetCountry({ lat, lng });

//         const filteredMovies = movies.filter((item, index) => {
//           return item.Country.indexOf(country) !== -1;
//         });
//         setNationalMovies(filteredMovies);
//       }
//     };

//     getNationalMovies();
//   }, [position]);

//   useEffect(() => {
//     const data = require("../assets/Movies.json");
//     setMovies(data);
//   }, []);

//   return (
//     <ProfileContext.Consumer>
//       {({ user, changeUser }) => {
//         let movieToResume = [];
//         if (user) {
//           const data = require("../assets/moviesToResume.json");
//           movieToResume = data[user];
//         }

//         return (
//           <>
//             <StatusBar
//               translucent
//               backgroundColor="transparent"
//               barStyle="light-content"
//             />
//             <Container>
//               <Poster source={require("../assets/poster.jpg")}>
//                 <Gradient
//                   locations={[0, 0.2, 0.6, 0.93]}
//                   colors={[
//                     "rgba(0,0,0,0.5)",
//                     "rgba(0,0,0,0.0)",
//                     "rgba(0,0,0,0.0)",
//                     "rgba(0,0,0,1)",
//                   ]}
//                 >
//                   <Header />
//                   <Hero />
//                 </Gradient>
//               </Poster>
//               <Movies
//                 label={`Continuar assistindo ${user}`}
//                 data={movieToResume ? movieToResume : []}
//               />
//               <Movies label="Nacionais" data={nationalMovies} />
//               <Movies label="Recomendados" data={movies} />
//               <Movies label="Top 10" data={movies} />
//             </Container>
//           </>
//         );
//       }}
//     </ProfileContext.Consumer>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import { StatusBar, Dimensions,  View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import Movies from "../components/Movies";
import ProfileContext from "../context/ProfileContext";
import { GetCountry, GetLocation } from "../utils/Geolocation";
import FadingSlides from 'react-native-fading-slides';


const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;


const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [nationalMovies, setNationalMovies] = useState([]);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    GetLocation()
      .then((info) => {
        setPosition(info);
      })
      .catch((error) => {
        setPosition(null);
      });
  }, []);

  useEffect(() => {
    const getNationalMovies = async () => {
      if (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const country = await GetCountry({ lat, lng });

        const filteredMovies = movies.filter((item, index) => {
          return item.Country.indexOf(country) !== -1;
        });
        setNationalMovies(filteredMovies);
      }
    };

    getNationalMovies();
  }, [position]);

  useEffect(() => {
    const data = require("../assets/Movies.json");
    setMovies(data);
  }, []);


  const slides = [
    {
      image: require('../assets/poster.jpg'),
      imageWidth: 300,
      imageHeight: 500,
      title: 'Outer Bancks',
      subtitle: 'Seria sobre bancos eu acho',
      titleColor: '#fff',
      subtitleColor: '#fff',
    },
    {
      image: require('../assets/movies/movie1.jpg'),
      imageWidth: 300,
      imageHeight: 500,
      title: 'F.R.I.E.N.D.S',
      subtitle: 'Serie sobre amigos',
      titleColor: '#fff',
      subtitleColor: '#fff',
    },
    {
      image: require('../assets/movies/movie2.jpg'),
      imageWidth: 300,
      imageHeight: 500,
      title: 'os irmão willoughby',
      subtitle: 'This is a beautiful world',
      titleColor: '#fff',
      subtitleColor: '#fff',
    },
    {
      image: require('../assets/movies/movie3.jpg'),
      imageWidth: 300,
      imageHeight: 500,
      title: 'Sonic',
      subtitle: 'This is a beautiful world',
      titleColor: '#fff',
      subtitleColor: '#fff',
    },
    {
      image: require('../assets/movies/movie4.jpg'),
      imageWidth: 300,
      imageHeight: 500,
      title: 'Sonic',
      subtitle: 'This is a beautiful world',
      titleColor: '#fff',
      subtitleColor: '#fff',
    },
    {
      image: require('../assets/movies/movie5.jpg'),
      imageWidth: 300,
      imageHeight: 500,
      title: 'Algum filme que',
      subtitle: 'This is a beautiful world',
      titleColor: '#fff',
      subtitleColor: '#fff',
    },
    {
      image: require('../assets/movies/movie6.jpg'),
      imageWidth: 300,
      imageHeight: 500,
      title: 'The Witcher',
      subtitle: 'This is a beautiful world',
      titleColor: '#fff',
      subtitleColor: '#fff',
    }
  ];

  return (
    <ProfileContext.Consumer>
      {({ user, changeUser }) => {
        let movieToResume = [];
        if (user) {
          const data = require("../assets/moviesToResume.json");
          movieToResume = data[user];
        }

        return (
          <>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <Container>
              <View>
                <FadingSlides
                  slides={slides}
                  fadeDuration = { 2200 } 
                  stillDuration = { 10000 } 
                  height={500}
                  startAnimation={true}
                />
              </View>
              <Movies
                label={`Continuar assistindo ${user}`}
                data={movieToResume ? movieToResume : []}
              />
              <Movies label="Nacionais" data={nationalMovies} />
              <Movies label="Recomendados" data={movies} />
              <Movies label="Top 10" data={movies} />
            </Container>
          </>
        );
      }}
    </ProfileContext.Consumer>
  );
};

export default Home;
