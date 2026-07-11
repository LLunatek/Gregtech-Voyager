function radio(radio, i_nbt, i_message, direction)
{
    ItemEvents.rightClicked(`kubejs:${radio}_radio`, event => {
    const player = event.player
    let text

    if (direction == 'in') {
        text = Text.red(i_message)
    } else if (direction == 'out') {
        text = Text.green(i_message)
    }

    let nbt = event.item.nbt

    if (nbt && nbt.getInt('message') == i_nbt) {
        player.tell(text)

        event.server.scheduleInTicks(20, () => {
            let item = player.getMainHandItem()
            let newNbt = item.nbt ? item.nbt : {}
            newNbt.message = i_nbt + 1
            item.setNbt(newNbt)
        })
    }
    // if (i_nbt == 24) {
    //     player.tell(text)
    //     player.tell(Text.yellow('Transmission ended.'))
    // }

    event.server.runCommandSilent(
        `/playsound gtceu:computation player ${player.username}`
    )
})


}
radio('celestial', 1, 'Put this into a celestial post box to get a trade contract');
