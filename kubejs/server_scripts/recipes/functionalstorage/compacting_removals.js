ServerEvents.recipes((event) => {
    event.remove({ id: "functionalstorage:custom_compacting/amethyst" })
    event.remove({ id: "functionalstorage:custom_compacting/quartz" })
    event.remove({ id: "functionalstorage:custom_compacting/clay" })
    event.remove({ id: "functionalstorage:custom_compacting/glowstone" })
})
