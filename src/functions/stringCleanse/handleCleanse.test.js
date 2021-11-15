import { handleCleanse } from "./handleCleanse";

test('Basic Test Number One: Should return same output', () => {
    expect(handleCleanse('hello world')).toBe('hello world');
});

test('hello world => hello world', () => {
    expect(handleCleanse('hello world')).toBe('hello world')
});

test('hello%world => hello world', () => {
    expect(handleCleanse('hello%world')).toBe('hello world');
});

test('!hello world => hello world', () => {
    expect(handleCleanse('!hello world')).toBe('hello world');
});

test(';hello?world! => hello world', () => {
    expect(handleCleanse(';hello?world!')).toBe('hello world');
});

test('hello;world => hello world', () => {
    expect(handleCleanse('hello;world')).toBe('hello world');
});

test('hello world? => hello world', () => {
    expect(handleCleanse('hello world?')).toBe('hello world');
});