import type { GenerateConfig } from '@v-c/picker/generate/index'
import type { AnyObject } from '../../_util/type'
import generateRangePicker from './generateRangePicker'
import generateSinglePicker from './generateSinglePicker'

export type {
  GenericTimePickerProps,
  PickerLocale,
  PickerProps,
  PickerPropsWithMultiple,
  RangePickerProps,
} from './interface'

function generatePicker<DateType extends AnyObject = AnyObject>(generateConfig: GenerateConfig<DateType>) {
  const { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker }
    = generateSinglePicker(generateConfig)

  const RangePicker = generateRangePicker(generateConfig)

  type MergedDatePickerType = typeof DatePicker & {
    WeekPicker: typeof WeekPicker
    MonthPicker: typeof MonthPicker
    YearPicker: typeof YearPicker
    RangePicker: typeof RangePicker
    TimePicker: typeof TimePicker
    QuarterPicker: typeof QuarterPicker
  }

  const MergedDatePicker = DatePicker as MergedDatePickerType

  MergedDatePicker.WeekPicker = WeekPicker
  MergedDatePicker.MonthPicker = MonthPicker
  MergedDatePicker.YearPicker = YearPicker
  MergedDatePicker.RangePicker = RangePicker
  MergedDatePicker.TimePicker = TimePicker
  MergedDatePicker.QuarterPicker = QuarterPicker

  return MergedDatePicker
}

export default generatePicker
