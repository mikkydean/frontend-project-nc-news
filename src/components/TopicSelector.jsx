import { useEffect, useState } from "react"
import { getTopics } from "../api"

function TopicSelector ({selectedTopic, setSelectedTopic}) {
    const [topics, setTopics] = useState([])

    const handleChange = (e) => {
        setSelectedTopic(e.target.value)
        }

    useEffect (() => {
        getTopics().then((response) => {
          setTopics(response.data.topics)
        })
      }, [])

return <div>
    <label htmlFor="topic-selection">Topic: </label>
    <select onChange={handleChange} value={selectedTopic} id="topic-selection">
        <option value="">All topics</option>
    {topics.map((topic) => {
        const capitalisedTopic =
        topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)
        return <option value={topic.slug} key={topic.slug}>{capitalisedTopic}</option>
    })}
    </select>
</div>
}

export default TopicSelector