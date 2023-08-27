import s from './PageNotFound.module.scss'

export const PageNotFound = () => {
    return (
        <div className={`defaultfontS ${s.demoMessageAlertWrapper}`}>
            {/* <BackToMain /> */}
            <div className={`bold700 ${s.demoMessageAlert}`}>
                404 NOT FOUND
            </div>
        </div>
    )
}