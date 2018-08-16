import _ from 'lodash';

export const findHashTag = (string) => {
    return _.chain(string).split(' ').filter(word=>word.startsWith('#')).reject(word=>word=="#").value();
  }