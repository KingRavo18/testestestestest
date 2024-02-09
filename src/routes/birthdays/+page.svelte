<script>
    import Birthday from "./Birthday.svelte";

    let data = [
        {named: "Hercules", dob: "1994-03-15"},
        {named: "Athena", dob: "2001-08-27"}
    ];            
</script>

<h1>Birthday list</h1>

<ul>
{#each data as {name, dob}}
<li><Birthday named={name} dob={dob} /></li>
{/each}
</ul>