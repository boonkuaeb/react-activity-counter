import {MdTerrain} from 'react-icons/md'
import {TiWeatherSnow} from 'react-icons/ti'
import { PropTypes } from 'react'


export const SkiDayRow = ({
                              resort, date,
                              powder, backcountry
                          }) => (
    <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()}/
            {date.getFullYear()}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <TiWeatherSnow/> : null}
        </td>
        <td>
            {(backcountry) ? <MdTerrain/> : null}
        </td>
    </tr>

);


SkiDayRow.PropTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
};