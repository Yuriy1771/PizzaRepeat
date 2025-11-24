import React, {FC} from "react"
import ContentLoader, {IContentLoaderProps} from "react-content-loader"

const Skeleton:FC<IContentLoaderProps> = (props) => (
    <ContentLoader
        speed={2}
        width={286}
        height={465}
        viewBox="0 0 286 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="19" y="312" rx="10" ry="10" width="236" height="22" />
        <rect x="19" y="284" rx="10" ry="10" width="236" height="22" />
        <rect x="21" y="341" rx="10" ry="10" width="61" height="29" />
        <rect x="160" y="341" rx="10" ry="10" width="94" height="29" />
        <circle cx="136" cy="118" r="109" />
        <rect x="67" y="236" rx="10" ry="10" width="138" height="27" />
    </ContentLoader>
)

export default Skeleton