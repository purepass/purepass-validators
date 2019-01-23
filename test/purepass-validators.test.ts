import * as validate from '../src/purepass-validators'
import { Erric } from 'easy-e'

describe('purepass-validators', () => {
  describe('secret validation', () => {
    it('should return an Erric if secret is an empty string', () => {
      expect(validate.secret('')).toBeInstanceOf(Erric)
    })
    it('should return null if secret is a string >=1 character in length', () => {
      expect(validate.secret('f')).toBeNull()
    })
  })

  describe('namespace validation', () => {
    it('should return an Erric if namespace is longer than 2 chars', () => {
      expect(validate.namespace('123')).toBeInstanceOf(Erric)
    })
    it('should return null if namespace is a string, 2 chars in length', () => {
      expect(validate.namespace('fa')).toBeNull()
    })
  })

  describe('specialCharcater validation', () => {
    it('should return an Erric if specialCharacter is not 1 character in length', () => {
      expect(validate.specialCharacter('123')).toBeInstanceOf(Erric)
    })
    it('should throw if specialCharacter is 1 character in length, but not in specialCharacters source', () => {
      expect(validate.specialCharacter('a')).toBeInstanceOf(Erric)
    })
    it('should return null if specialCharacter is defined and meets constraints', () => {
      expect(validate.specialCharacter('*')).toBeNull()
    })
  })

  describe('maxPasswordLength validation', () => {
    it('should throw if maxPasswordLength is less than base length 8, and post prefix length 13', () => {
      expect(validate.maxPasswordLength(12)).toBeInstanceOf(Erric)
    })
    it('should generate if maxPassword the option is defined and meets constraints', () => {
      expect(validate.maxPasswordLength(14)).toBeNull()
    })
  })
})
