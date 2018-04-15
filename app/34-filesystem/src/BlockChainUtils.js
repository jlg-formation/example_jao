export class BlockChainUtils {
    static save(blockchain, filename) {
        let block = blockchain.lastBlock;
        const array = [];
        while (true) {
            array.push(block);
            block = block.previous;
            if (block === undefined) break;
        }

        const accumulator = array.reduce((acc, block) => acc +
            `${block.id};${block.data};${block.hash}
`, '');

    }
}
