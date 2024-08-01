export default function bs_list(haystack: number[], needle: number): boolean {
    if (haystack.length === 0) return false;

    const pointer = Math.floor(haystack.length / 2);
    if (haystack[pointer] === needle)
    {
            return true;
    }
    else if (haystack[pointer] > needle)
    {
        return bs_list(haystack.slice(0, pointer), needle);
    }
    else
    {
        return bs_list(haystack.slice(pointer + 1), needle);
    }
}