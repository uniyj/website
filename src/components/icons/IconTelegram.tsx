import React from "react"

export type IconTelegramProps = {
    width?: number
    height?: number
}

export default function IconTelegram({ width = 24, height = 24 }: IconTelegramProps): JSX.Element {
    return (
        <svg
            className="custom-icon"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_669_5493)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.01103 11.3625C8.60622 8.9248 12.3372 7.3177 14.2041 6.54123C19.5342 4.32424 20.6418 3.93912 21.3636 3.92641C21.5224 3.92361 21.8774 3.96296 22.1074 4.14955C22.3016 4.30711 22.355 4.51994 22.3805 4.66933C22.4061 4.81871 22.4379 5.159 22.4126 5.4249C22.1238 8.45978 20.874 15.8247 20.2381 19.2238C19.9691 20.6621 19.4393 21.1443 18.9265 21.1915C17.8119 21.2941 16.9655 20.4549 15.886 19.7473C14.1967 18.64 13.2424 17.9507 11.6027 16.8701C9.70775 15.6214 10.9362 14.935 12.0161 13.8134C12.2987 13.5198 17.2096 9.05301 17.3047 8.6478C17.3166 8.59712 17.3276 8.40821 17.2154 8.30846C17.1031 8.20871 16.9375 8.24282 16.818 8.26995C16.6486 8.30841 13.95 10.0921 8.72219 13.621C7.9562 14.1469 7.26239 14.4032 6.64077 14.3898C5.95547 14.375 4.63724 14.0023 3.65727 13.6838C2.45529 13.2931 1.49999 13.0865 1.58317 12.4229C1.6265 12.0773 2.10245 11.7238 3.01103 11.3625Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_669_5493">
                    <rect width="21.6536" height="21.6536" transform="translate(1.17334 1.17334)" />
                </clipPath>
            </defs>
        </svg>
    )
}