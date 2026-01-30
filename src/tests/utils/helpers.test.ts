import { describe, it, expect } from 'vitest';
import { randomInt, clamp, createElement } from '@/utils/helpers';

describe('helpers', () => {
  describe('randomInt', () => {
    it('should return a number within the specified range', () => {
      const result = randomInt(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });
  });

  describe('clamp', () => {
    it('should clamp value to min', () => {
      expect(clamp(5, 10, 20)).toBe(10);
    });

    it('should clamp value to max', () => {
      expect(clamp(25, 10, 20)).toBe(20);
    });

    it('should return value if within range', () => {
      expect(clamp(15, 10, 20)).toBe(15);
    });
  });

  describe('createElement', () => {
    it('should create an element with specified tag', () => {
      const div = createElement('div');
      expect(div.tagName).toBe('DIV');
    });

    it('should set id and className', () => {
      const div = createElement('div', {
        id: 'test-id',
        className: 'test-class',
      });
      expect(div.id).toBe('test-id');
      expect(div.className).toBe('test-class');
    });

    it('should set textContent', () => {
      const div = createElement('div', {
        textContent: 'Hello World',
      });
      expect(div.textContent).toBe('Hello World');
    });
  });
});
