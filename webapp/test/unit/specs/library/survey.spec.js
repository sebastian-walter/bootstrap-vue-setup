import moment from 'moment';
import { getSurveyEndDate, getSurveyStartDate } from 'src/library/survey';

describe('getSurveyDate', () => {
  it('getSurveyDate should deliver back the correct date when point in time and interval provided', () => {
    // 30 mins * 96 = 48h = 2 days
    const survey = {
      SurveyPeriodEnd: 96,
      SurveyInterval: 4,
    };
    const format = 'LLL';

    const expectedDate = moment().date(3).hour(0).minutes(0)
.seconds(0);

    expect(getSurveyEndDate(survey).format(format))
      .to.equal(expectedDate.format(format));
  });
});

describe('getSurveyDate', () => {
  it('getSurveyDate should deliver back the correct start date when point in time and interval provided', () => {
    // 30 mins * 96 = 48h = 2 days
    const survey = {
      SurveyPeriodBegin: 48,
      SurveyInterval: 4,
    };
    const format = 'LLL';

    const expectedDate = moment().date(2).hour(0).minutes(0)
      .seconds(0);

    expect(getSurveyStartDate(survey).format(format))
      .to.equal(expectedDate.format(format));
  });
});
