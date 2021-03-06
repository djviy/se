import React from "react"
//import PropTypes from "prop-types"

import Section from "../../../section/section"
import Project from "../../../cards/project"
import useProjects from "../../../../hooks/use-projects"

const ProjectsSection = props => {
  const projects = useProjects()

  return (
    <div>
      <Section title="Проекты">
        {projects.map(({ title, slug, image, description }) => {
          return (
            <Project
              key={slug}
              title={title}
              description={description}
              link={slug}
              image={image}
            />
          )
        })}
      </Section>
    </div>
  )
}

ProjectsSection.propTypes = {}

export default ProjectsSection
