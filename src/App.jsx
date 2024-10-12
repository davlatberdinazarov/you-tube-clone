import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "./pages"
import JsonPlaceholder from "./components/JsonPlaceholder"
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Feed/>}/>
          <Route path="json" element={<JsonPlaceholder/>} />
          <Route path="video/:id" element={<VideoDetail/>} />
          <Route path="channel/:id" element={<ChannelDetail/>} />
          <Route path="search/:searchTerm" element={<SearchFeed/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
