import { DockerMatchQuery, DockerImage } from './dockerMatch.types'
import { MOCK_DOCKER_IMAGES } from './dockerMatch.mock'

export async function queryDockerImages(query: DockerMatchQuery): Promise<DockerImage[]> {
  let results = MOCK_DOCKER_IMAGES

  if (query.framework) {
    results = results.filter((d) => d.framework === query.framework)
  }

  return results
}
