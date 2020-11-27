import React from "react";
import cn from "classnames";
import Skeleton from "./skeleton";
import "./index.scss";

type Props = {
    /** Заголовок */
    title?: React.ReactNode;
    /** Ссылка на сущность (в заголовке) */
    titleHref?: string;
    /** Описание */
    description?: React.ReactNode;
    /** Ссылка на превью */
    previewUrl?: string;
    /** Секция действий */
    actions?: React.ReactNode;
    /** Класс */
    className?: string;
};

/**
 * @UIKit Карточка
 * @remark Используется для отображения базовых сущностей: Repo, User, Org
 */
const Card = (props: Props) => {
    const { actions, previewUrl, description, title, titleHref, className } = props;

    return (
        <div className={cn("card", "flex", className)}>
            {previewUrl && (
                <div className="card__preview mr-4">
                    <img src={previewUrl} alt="preview" width={90} height={90} />
                </div>
            )}
            <div className="card__details flex flex-col flex-grow">
                {title && (
                    <a className="card__title text-title" href={titleHref}>
                        {title}
                    </a>
                )}
                {description && <span className="card__description">{description}</span>}
            </div>
            {actions && <div className="card__actions ml-4">{actions}</div>}
        </div>
    );
};

Card.Skeleton = Skeleton;

export default Card;
