import { Button, Card } from "react-bootstrap"
import { Language } from "./App"

interface IProject {
    title: string,
    subtitle: string,
    description: any,
    link?: string,
    language: Language
}

function Project({ description, title, subtitle, link, language }: IProject) {
    return (
        <Card style={{ marginLeft: 100, marginRight: 100, marginBottom: 50 }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                {description}
                {link &&
                    <Button style={{ marginTop: 10 }} target='_blank' rel='noreferrer' href={link}>
                        {language === Language.FR &&
                            'Voir projet'
                        }
                        {language === Language.DE &&
                            'Projekt ansehen'
                        }
                        {language === Language.EN &&
                            'View project'
                        }
                    </Button>
                }
            </Card.Body>
        </Card>
    )
}

export default Project